---
tag: HVZ725BQBG
kind: problem
type: answer
answer: a_{n}=4\times3^{n}+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Insert the sum of each pair of adjacent terms between them in a sequence, forming a new sequence. Such an operation is called a "Z expansion" of the sequence. Given the sequence $1,2,3$, the first Z expansion results in the sequence $1,3,2,5,3$; the second Z expansion results in the sequence $1,4,3,5,2,7,5,8,3$; $\cdots \cdots$ Let the sequence obtained after the $n$-th Z expansion be $1, x_{1}, x_{2}$, $\cdots, x_{m}, 3$, and denote $a_{n}=1+x_{1}+x_{2}+\cdots+x_{m}+3$.
(1) Find the values of $a_{1} 、 a_{2} 、 a_{3}$;
(2) If $b_{n}=a_{n}-2$, prove that $\left\{b_{n}\right\}$ is a geometric sequence, and find the general term formula for the sequence $\left\{a_{n}\right\}$.
