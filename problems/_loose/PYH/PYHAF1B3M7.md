---
tag: PYHAF1B3M7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1976 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2921757
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39243
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1976
    source: hf-ai-mo-aops
    label: 1976 Bundeswettbewerb Mathematik
---
A set $S$ of rational numbers is ordered in a tree-diagram in such a way that each rational number $\frac{a}{b}$ (where $a$ and $b$ are coprime integers) has exactly two successors: $\frac{a}{a+b}$ and $\frac{b}{a+b}$ . How should the initial element be selected such that this tree contains the set of all rationals $r$ with $0 < r < 1$ ? Give a procedure for determining the level of a rational number $\frac{p}{q}$ in this tree.
