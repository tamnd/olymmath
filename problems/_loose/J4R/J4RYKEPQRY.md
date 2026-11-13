---
tag: J4RYKEPQRY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209290
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 62nd NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Given a positive integer number $k$, define the function $f$ on the set of all positive integer numbers to itself by
$$f(n)=\begin{cases}1, &\text{if }n\le k+1\\ f(f(n-1))+f(n-f(n-1)), &\text{if }n>k+1\end{cases}$$
Show that the preimage of every positive integer number under $f$ is a finite non-empty set of consecutive positive integers.
