---
tag: 1GHGGXJX2Q
kind: problem
type: answer
answer: L(M)=\begin{cases}2,&
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive integers $X_{1}, X_{2} \ldots X_{n}$, all elements of which do not exceed some number $M$. It is known that for all $k>2$, $X_{\mathrm{k}}=\left|X_{\mathrm{k}-1}-X_{\mathrm{k}-2}\right|$. What can be the maximum length of this sequence?
