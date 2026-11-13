---
tag: 7JMBP58PR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59352
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251489
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/1999
    source: hf-ai-mo-aops
    label: 1999 Singapore Senior Math Olympiad
---
Let $\{a_1,a_2,...,a_{100}\}$ be a sequence of $100$ distinct real numbers. Show that there exists either an increasing subsequence $a_{i_1}<a_{i_2}<...<a_{i_{10}}$ $(i_1<i_2<...<i_{10})$ of $10$ numbers, or a decreasing subsequence $ a_{j_1}>a_{j_2}>...>a_{j_{12}}$ $(j_1<j_2<...<j_{12})$ of $12$ numbers, or both.
