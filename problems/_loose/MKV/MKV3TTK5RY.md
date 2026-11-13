---
tag: MKV3TTK5RY
kind: problem
type: answer
answer: \left| f\left( \frac{1}{q} \right) - p \right| \le \frac{1}{2012}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function from the set of rational numbers to the set of real numbers. Suppose that for all rational numbers $r$ and $s$, the expression $f(r + s) - f(r) - f(s)$ is an integer. Prove that there is a positive integer $q$ and an integer $p$ such that
$$
\Bigl\lvert f\Bigl(\frac{1}{q}\Bigr) - p \Bigr\rvert \le \frac{1}{2012} .
$$
