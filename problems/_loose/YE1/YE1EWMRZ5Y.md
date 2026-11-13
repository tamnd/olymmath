---
tag: YE1EWMRZ5Y
kind: problem
type: answer
answer: "462"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an ordered $10$-tuple of nonnegative integers $a_1,a_2,\ldots, a_{10}$, we denote
$$f(a_1,a_2,\ldots,a_{10})=\left(\prod_{i=1}^{10} {\binom{20-(a_1+a_2+\cdots+a_{i-1})}{a_i}}\right) \cdot \left(\sum_{i=1}^{10} {\binom{18+i}{19}}a_i\right).$$ When $i=1$, we take $a_1+a_2+\cdots+a_{i-1}$ to be $0$. Let $N$ be the average of $f(a_1,a_2,\ldots,a_{10})$ over all $10$-tuples of nonnegative integers $a_1,a_2,\ldots, a_{10}$ satisfying
$$a_1+a_2+\cdots+a_{10}=20.$$
Compute the number of positive integer divisors of $N$.

*2021 CCA Math Bonanza Individual Round #14*
