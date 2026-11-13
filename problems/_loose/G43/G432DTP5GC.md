---
tag: G432DTP5GC
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, the sum of the first $n$ terms is $S_{n}=-n^{2}+9 n+2\left(n \in \mathbf{N}^{*}\right)$.
(1) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) Let $b_{n}=\frac{1}{n\left(12-a_{n}\right)}\left(n \in \mathbf{N}^{*}\right), T_{n}=b_{1}+b_{2}+\cdots+b_{n}$, does there exist a smallest positive integer $m$, such that the inequality $T_{n}<\frac{m}{32}$ holds for all positive integers $n$? If it exists, find the value of $m$; if not, explain the reason.
