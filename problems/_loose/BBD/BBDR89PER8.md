---
tag: BBDR89PER8
kind: problem
type: answer
answer: \left(\frac{1-a}{a}\right)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An unfair coin, which has the probability of $a\ \left(0<a<\frac 12\right)$ for showing $Heads$ and $1-a$ for showing $Tails$, is flipped $n\geq 2$ times. After $n$-th trial, denote by $A_n$ the event that heads are showing on at least two times and by$B_n$ the event that are not showing in the order of $tails\rightarrow heads$, until the trials $T_1,\ T_2,\ \cdots ,\ T_n$ will be finished . Answer the following questions:

(1) Find the probabilities $P(A_n),\ P(B_n)$.

(2) Find the probability $P(A_n\cap B_n )$.

(3) Find the limit $\lim_{n\to\infty} \frac{P(A_n) P(B_n)}{P(A_n\cap B_n )}.$

You may use $\lim_{n\to\infty} nr^n=0\ (0<r<1).$
