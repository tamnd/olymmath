---
tag: FMKANEA0XN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{1979}$ be any permutation of the natural numbers $1,2, \cdots, 1979$. To pair them, let $a_{1980}=0$. Calculate $\left|a_{1}-a_{2}\right|,\left|a_{3}-a_{1}\right|, \cdots,\left|a_{1979}-a_{1980}\right|$, and then arrange these 990 numbers arbitrarily as $b_{1}, b_{2}, \cdots, b_{990}$; then calculate $\left|b_{1}-b_{2}\right|,\left|b_{3}-b_{4}\right|, \cdots, \mid b_{989}-b_{990} \mid$. Continue this process (adding a "zero" when there is an odd number of numbers to facilitate pairing), until you get a single number $x$. Prove that $x$ is even.
