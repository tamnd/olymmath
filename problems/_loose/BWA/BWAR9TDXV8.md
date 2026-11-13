---
tag: BWAR9TDXV8
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154751
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 24th Philippine Mathematical Olympiad
---
Let $a, b, c$ be real numbers such that
$$
3 a b+2=6 b, 3 b c+2=5 c, 3 c a+2=4 a .
$$

Suppose the only possible values for the product $a b c$ are $r / s$ and $t / u$, where $r / s$ and $t / u$ are both fractions in lowest terms. Find $r+s+t+u$.
