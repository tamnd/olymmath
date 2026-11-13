---
tag: W3W4QXNVJG
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \left( a_n \right)_{n\ge 1} $ be a sequence of real numbers such that $ a_1>2 $ and $ a_{n+1} =a_1+\frac{2}{a_n} , $ for all natural numbers $ n. $

**a)** Show that $ a_{2n-1} +a_{2n} >4 , $ for all natural numbers $ n, $ and $ \lim_{n\to\infty} a_n =2. $
**b)** Find the biggest real number $ a $ for which the following inequality is true:
$$ \sqrt{x^2+a_1^2} +\sqrt{x^2+a_2^2} +\sqrt{x^2+a_3^2} +\cdots +\sqrt{x^2+a_n^2} > n\sqrt{x^2+a^2}, \forall x\in\mathbb{R} , \forall n\in\mathbb{N} . $$
