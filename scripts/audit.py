#!/usr/bin/env python3
"""
LivingFramework.github.io -- Site Audit Script
Scans all 13 HTML pages for known stale or inconsistent strings.
Run before every push: python3 scripts/audit.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent

PAGES = [
    "index.html",
    "about/index.html",
    "advisory/index.html",
    "assessment/index.html",
    "early-observations/index.html",
    "failure-library/index.html",
    "niyom/index.html",
    "papers/index.html",
    "research/index.html",
    "ritam/index.html",
    "roadmap/index.html",
    "start-here/index.html",
    "terminology/index.html",
]

EXACT_STRINGS = [
    ("niyom.vercel.app",           "NIYOM Vercel URL -- product not yet public"),
    ("Session 76",                 "Internal session number"),
    ("Session 74",                 "Internal session number"),
    ("Session 63",                 "Internal session number"),
    ("NORTH_STAR document",        "Internal document name"),
    ("runtime directory",          "Internal terminology"),
    ("private prior-art audit",    "Internal qualifier"),
    ("currently in re-anchoring",  "Internal stage-progress label"),
    ("Stage 9 · Re-anchoring",     "Internal stage label"),
    ("Live at niyom",              "NIYOM live-status -- product not yet public"),
    ("Stage 7 · Active",           "NIYOM card status -- should be In Development"),
]

PATTERN_CHECKS = [
    (re.compile(r"Session\s+\d+"),          "Internal session number reference"),
    (re.compile(r"Stage\s+\d+\s+·\s+Re-"), "Internal stage label"),
]

def scan(filepath):
    issues = []
    try:
        lines = filepath.read_text(encoding="utf-8").splitlines()
    except FileNotFoundError:
        return [(0, "FILE NOT FOUND", "", "")]
    for n, line in enumerate(lines, 1):
        matched_spans = set()
        for text, reason in EXACT_STRINGS:
            if text in line:
                issues.append((n, text, reason, line.strip()[:120]))
                start = line.find(text)
                matched_spans.update(range(start, start + len(text)))
        for pattern, reason in PATTERN_CHECKS:
            m = pattern.search(line)
            if m and m.start() not in matched_spans:
                issues.append((n, m.group(), reason, line.strip()[:120]))
    return issues

def main():
    bar = "-" * 62
    print("\n" + bar)
    print("  LIVINGFRAMEWORK SITE AUDIT -- stale string check")
    print(bar + "\n")
    total = 0
    flagged = 0
    for rel in PAGES:
        hits = scan(ROOT / rel)
        if not hits:
            print("  OK  " + rel)
            continue
        flagged += 1
        print("\n  !!  " + rel)
        for line_num, match, reason, ctx in hits:
            print("       line " + str(line_num).rjust(4) + "  [" + reason + "]")
            print("              found   : " + repr(match))
            print("              context : " + ctx)
            total += 1
    print("\n" + bar)
    if total == 0:
        print("  OK  No issues found. Safe to push.")
    else:
        print("  !!  " + str(total) + " issue(s) in " + str(flagged) + " file(s). Fix before pushing.")
    print(bar + "\n")

if __name__ == "__main__":
    main()
