---
tag: NTH1FWNQC3
kind: problem
type: answer
answer: "21"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\left\{a_{n}\right\}$ whose terms are all non-negative, the sum of its first $n$ terms is $S_{n}$, and for any $n \in N^{*}$, we have
$$
a_{n+1} \leq \frac{a_{n}+a_{n+2}}{2} \text {. }
$$
(1) If $a_{1}=1, a_{505}=2017$, find the maximum value of $a_{6}$;
(2) If for any $n \in N^{*}$, we have $S_{n} \leq 1$, prove that $0 \leq a_{n}-a_{n+1} \leq \frac{2}{n(n+1)}$.
