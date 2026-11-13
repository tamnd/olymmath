---
tag: DPTG38E8C1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $a$, the number $d=d(a)$ is obtained through the following process.
(1) Move the last digit of $a$ to the first position to get the number $b$;
(2) Square $b$ to get the number $c$;
(3) Move the first digit of $c$ to the last position to get the number $d$.
For example, if $a=2003$, then $b=3200$, $c=10240000$, and $d=02400001=2400001=d$ (2003).
Find all positive integers $a$ such that $d(a)=a^{2}$.
