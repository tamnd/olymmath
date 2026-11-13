---
tag: SENJNS0PPV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59364
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2003
    source: hf-ai-mo-aops
    label: 2003 Singapore Senior Math Olympiad
---
(i) Find a formula for $S_n = -1^2 \times 2 + 2^2 \times 3 - 3^2 \times 4 + 4^2 \times 5 -... + (-l)^n n^2 \times (n + 1)$ in terms of the positive integer $n$ . Justify your answer.
(As an example, one has $1 + 2 + 3 +...+n = \frac{n(n+1)}{2}$ )
(ii) Using your formula in (i), find the value of $ -1^2 \times 2 + 2^2 \times 3 - 3^2 \times 4 + 4^2 \times 5 -... + (-l)^{100} 100^2 \times (100 + 1)$
