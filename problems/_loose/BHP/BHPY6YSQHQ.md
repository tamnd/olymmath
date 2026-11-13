---
tag: BHPY6YSQHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3099026
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26182
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2022
    source: hf-ai-mo-aops
    label: 2022 JBMO Shortlist
---
Anna and Bob, with Anna starting first, alternately color the integers of the set $S = \{1, 2, ..., 2022 \}$ red or blue. At their turn each one can color any uncolored number of $S$ they wish with any color they wish. The game ends when all numbers of $S$ get colored. Let $N$ be the number of pairs $(a, b)$ , where $a$ and $b$ are elements of $S$ , such that $a$ , $b$ have the same color, and $b - a = 3$ .
Anna wishes to maximize $N$ . What is the maximum value of $N$ that she can achieve regardless of how Bob plays?
