---
tag: TG2KGJCSX5
kind: problem
type: answer
answer: "12141"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, define $a_{n}$ and $b_{n}$ to be the positive integers such that

$$
(\sqrt{3}+\sqrt{2})^{2 n}=a_{n}+b_{n} \sqrt{6} \text { and } (\sqrt{3}-\sqrt{2})^{2 n}=a_{n}-b_{n} \sqrt{6}
$$

(a) Determine the values of $a_{2}$ and $b_{2}$.

(b) Prove that $2 a_{n}-1<(\sqrt{3}+\sqrt{2})^{2 n}<2 a_{n}$ for all positive integers $n$.

(c) Let $d_{n}$ be the ones (units) digit of the number $(\sqrt{3}+\sqrt{2})^{2 n}$ when it is written in decimal form. Determine, with justification, the value of

$$
d_{1}+d_{2}+d_{3}+\cdots+d_{1865}+d_{1866}+d_{1867}
$$

(The given sum has 1867 terms.)
