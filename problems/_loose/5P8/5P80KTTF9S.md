---
tag: 5P80KTTF9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove the following two identities:

$[3 \mathrm{x}]=[\mathrm{x}]+\left[x+\frac{1}{3}\right]+\left[x+\frac{2}{3}\right]$,

$\{3 x\}=\{x\}+\left\{x+\frac{1}{3}\right\}+\left\{x+\frac{2}{3}\right\}$.

As is known, $[x]$ (read: the integer part of $x$) is the largest integer not greater than $x$, and $\{x\}=x-[x]$.
