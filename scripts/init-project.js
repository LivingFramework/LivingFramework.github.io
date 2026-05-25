#!/usr/bin/env node
/**
 * Cowork Governance Setup
 *
 * Generates a pre-filled 00-governance/ folder with all seven
 * Cowork governance templates ready to use.
 *
 * Run from the LivingFramework.github.io repo root:
 *
 *   node scripts/init-project.js
 *
 * No dependencies — uses only Node.js built-in modules.
 * Requires Node.js 14+. Download at https://nodejs.org
 */

const fs   = require('fs');
const path = require('path');
const rl   = require('readline').createInterface({
  input:  process.stdin,
  output: process.stdout,
});

function ask(q) {
  return new Promise(resolve => rl.question(q, a => resolve(a.trim())));
}
function today() {
  return new Date().toISOString().split('T')[0];
}
function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-') || 'my-project';
}
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}
function copyFilled(src, dest, vars) {
  let text = fs.readFileSync(src, 'utf8');
  for (const [k, v] of Object.entries(vars)) text = text.split(k).join(v);
  fs.writeFileSync(dest, text, 'utf8');
}
function write(dest, text) {
  fs.writeFileSync(dest, text, 'utf8');
}

async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║      Cowork Governance Setup             ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
  console.log('Generates your 00-governance/ folder with all seven');
  console.log('Cowork templates pre-filled and ready to use.');
  console.log('');

  // ── Questions ─────────────────────────────────────────────────────────────
  const name = await ask('1. Your name                           : ');
  if (!name) {
    console.log('\nName is required. Run the script again.');
    rl.close();
    return;
  }

  const role = await ask('2. What you do (one sentence)          : ');
  const project = await ask('3. Main project you\'ll work on with Claude: ');
  const goal  = await ask('4. What does success look like?       : ');

  console.log('');
  console.log('Where should the folder be created?');
  console.log('  1  Current directory  (creates ./' + (project ? slugify(project) : 'my-cowork') + '/)');
  console.log('  2  My Claude folder   (creates in ~/OneDrive/Desktop/Claude/ or ~/Claude/)');
  console.log('');
  const locChoice = await ask('Location (1 or 2, default 1): ');
  rl.close();

  // ── Paths ──────────────────────────────────────────────────────────────────
  const date      = today();
  const repoRoot  = path.resolve(__dirname, '..');
  const slug      = slugify(project || 'my-cowork');

  let baseDir;
  if (locChoice === '2') {
    // Try common Claude folder locations
    const candidates = [
      path.join(process.env.USERPROFILE || process.env.HOME || '', 'OneDrive', 'Desktop', 'Claude'),
      path.join(process.env.USERPROFILE || process.env.HOME || '', 'Desktop', 'Claude'),
      path.join(process.env.HOME || '', 'Claude'),
    ];
    const found = candidates.find(c => fs.existsSync(c));
    baseDir = found ? path.join(found, slug) : path.join(process.cwd(), slug);
    if (!found) {
      console.log('\n  ⚠  Could not locate your Claude folder — creating in current directory instead.');
    }
  } else {
    baseDir = path.join(process.cwd(), slug);
  }

  if (fs.existsSync(baseDir)) {
    console.log(`\n⚠  Folder "${slug}" already exists at ${baseDir}`);
    console.log('   Rename or delete it, then run the script again.\n');
    return;
  }

  // ── Substitution map ──────────────────────────────────────────────────────
  const vars = {
    '[Your name]':                                          name,
    '[DATE]':                                               date,
    '[DATE — suggest quarterly]':                           date,
    '[Professional background — what you do, what you know]': role || '[Add your background]',
    '[Your goals in plain language]':                       goal  || '[Add your goals]',
    '[Project name]':                                       project || '[Project name]',
    '[What needs doing]':                                   goal ? goal.slice(0, 60) : '[What needs doing]',
    '[NUMBER]':                                             '0',
  };

  // ── Create folder structure ────────────────────────────────────────────────
  console.log('');
  console.log(`Creating: ${baseDir}`);
  console.log('');

  const govDir     = path.join(baseDir, '00-governance');
  const inputsDir  = path.join(baseDir, '01-inputs');
  const workingDir = path.join(baseDir, '02-working', slug);
  const scratchDir = path.join(baseDir, '02-working', 'scratch');
  const draftsDir  = path.join(baseDir, '03-outputs', 'drafts');
  const finalDir   = path.join(baseDir, '03-outputs', 'final');
  const archiveDir = path.join(baseDir, '04-archive');

  for (const d of [govDir, inputsDir, workingDir, scratchDir, draftsDir, finalDir, archiveDir]) {
    ensureDir(d);
  }

  // ── Copy and fill the seven templates ────────────────────────────────────
  const templates = [
    ['RUNNING-DOCUMENT.md',       'RUNNING-DOCUMENT.md',       true],
    ['PARTNERSHIP-AGREEMENT.md',  'PARTNERSHIP-AGREEMENT.md',  true],
    ['TRUTH-PROTOCOL.md',         'TRUTH-PROTOCOL.md',         false],
    ['SESSION-START-PROTOCOL.md', 'SESSION-START-PROTOCOL.md', false],
    ['FAILURE-RECOVERY.md',       'FAILURE-RECOVERY.md',       false],
    ['CANONICAL-NUMBERS.md',      'CANONICAL-NUMBERS.md',      true],
    ['FOLDER-STRUCTURE.md',       'FOLDER-STRUCTURE.md',       false],
  ];

  const descriptions = {
    'RUNNING-DOCUMENT.md':       'Claude\'s memory across sessions (personalised)',
    'PARTNERSHIP-AGREEMENT.md':  'Your operating agreement (personalised)',
    'TRUTH-PROTOCOL.md':         'Anti-sycophancy rules',
    'SESSION-START-PROTOCOL.md': 'How to start every session',
    'FAILURE-RECOVERY.md':       'What to do when things break',
    'CANONICAL-NUMBERS.md':      'Single source for all numbers (personalised)',
    'FOLDER-STRUCTURE.md':       'Folder organisation guide',
  };

  for (const [srcFile, destFile, doFill] of templates) {
    const src  = path.join(repoRoot, srcFile);
    const dest = path.join(govDir, destFile);
    if (doFill) {
      copyFilled(src, dest, vars);
    } else {
      fs.copyFileSync(src, dest);
    }
    console.log(`  ✓  00-governance/${destFile}`);
    console.log(`     ${descriptions[destFile]}`);
    console.log('');
  }

  // ── Add placeholder files so folders appear non-empty ────────────────────
  write(path.join(inputsDir,  '.gitkeep'), '');
  write(path.join(scratchDir, '.gitkeep'), '');
  write(path.join(draftsDir,  '.gitkeep'), '');
  write(path.join(finalDir,   '.gitkeep'), '');
  write(path.join(archiveDir, '.gitkeep'), '');
  console.log('  ✓  01-inputs/');
  console.log('  ✓  02-working/' + slug + '/');
  console.log('  ✓  03-outputs/drafts/  03-outputs/final/');
  console.log('  ✓  04-archive/');
  console.log('');

  // ── Generate README ───────────────────────────────────────────────────────
  write(path.join(baseDir, 'README.md'), makeReadme(name, project, goal, date, slug));
  console.log('  ✓  README.md');

  // ── Final instructions ────────────────────────────────────────────────────
  const relPath = path.relative(process.cwd(), baseDir);
  console.log('');
  console.log('──────────────────────────────────────────────────────');
  console.log('Done. Your Cowork governance folder is ready.');
  console.log('');
  console.log('NEXT STEPS:');
  console.log('');
  console.log(`  1. Open ${relPath}/00-governance/RUNNING-DOCUMENT.md`);
  console.log('     Fill in the sections still marked with [...]');
  console.log('     Especially: Rules, Active Projects, and Canonical Numbers.');
  console.log('');
  console.log('  2. Copy the 00-governance/ folder into your Claude folder');
  console.log('     (if you didn\'t already create it there).');
  console.log('');
  console.log('  3. Start your first Cowork session with this prompt:');
  console.log('');
  console.log('     "Read RUNNING-DOCUMENT.md and PARTNERSHIP-AGREEMENT.md');
  console.log('      before we begin. Confirm you\'ve loaded them and tell me');
  console.log('      what\'s most important to hold from them."');
  console.log('');
  console.log('  4. When something goes wrong: Stop → Diagnose → Rollback → Note');
  console.log('     See 00-governance/FAILURE-RECOVERY.md');
  console.log('──────────────────────────────────────────────────────');
  console.log('');
}

function makeReadme(name, project, goal, date, slug) {
  const projectTitle = project || 'My Cowork Project';
  const ownerLine    = name    ? `**Owner:** ${name}  \n` : '';
  const goalBlock    = goal    ? `\n> ${goal}\n` : '';

  return `# ${projectTitle}

${ownerLine}**Created:** ${date}  
**Framework:** Cowork Governance Templates
${goalBlock}
---

## Start Every Session

Paste this into Cowork before doing anything else:

\`\`\`
Read RUNNING-DOCUMENT.md and CANONICAL-NUMBERS.md before we begin.
Confirm you've loaded them. Tell me:
1. Current project status and what we were working on
2. Any rules I must follow
3. Where we left off last session
Then wait for my instructions.
\`\`\`

---

## Your Governance Files

| File | Purpose |
|------|---------|
| \`00-governance/RUNNING-DOCUMENT.md\` | Claude's memory — read at every session start |
| \`00-governance/PARTNERSHIP-AGREEMENT.md\` | How this collaboration works |
| \`00-governance/TRUTH-PROTOCOL.md\` | Rules that prevent Claude from telling you what you want to hear |
| \`00-governance/SESSION-START-PROTOCOL.md\` | Exact prompts for every session type |
| \`00-governance/FAILURE-RECOVERY.md\` | What to do when things break (SDRN: Stop → Diagnose → Rollback → Note) |
| \`00-governance/CANONICAL-NUMBERS.md\` | Every number that matters lives here — Claude never guesses |
| \`00-governance/FOLDER-STRUCTURE.md\` | How this folder is organised and why |

---

## Your Folder Structure

\`\`\`
${slug}/
├── 00-governance/      ← Claude reads this first, every session
├── 01-inputs/          ← Source material (read-only for Claude)
├── 02-working/         ← Active work in progress
├── 03-outputs/         ← Finished work (drafts/ and final/)
└── 04-archive/         ← Deprecated files — never delete, archive here
\`\`\`

---

## What to Fill In Next

Open \`00-governance/RUNNING-DOCUMENT.md\` and complete:

- **Active Projects** — what you're actually working on right now
- **Rules** — any rules Claude must follow (add these as you discover what needs protecting)
- **Next Session** — where to resume

Open \`00-governance/CANONICAL-NUMBERS.md\` and add any numbers that matter to your work.

---

## When Things Break

**Stop → Diagnose → Rollback → Note**

See \`00-governance/FAILURE-RECOVERY.md\` for the full repair sequence and failure taxonomy.

---

*Generated by Cowork Governance Setup · [livingframework.github.io](https://livingframework.github.io/)*
`;
}

main().catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
