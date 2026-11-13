---
tag: AQJHVSH6RN
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{a_n\}$ is defined by $a_1=\frac{1}{2}$, $a_{n+1}=\frac{a_n}{(1+a_n)^2}$, $n=1,2,3, \cdots$.

(1) Let $b_n=\frac{1}{a_n}\ (n=1,2,3,\cdots).$ Prove that $b_n>2n$ for $n>1.$

(2) $\lim_{n\to\infty} \frac{1}{n} (a_1+a_2+\cdots +a_n).$

(3) $\lim_{n\to\infty} na_n.$
