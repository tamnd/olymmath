---
tag: QEAHNGRWS3
kind: problem
type: answer
answer: (n,p)\in{(2,4),(2,2)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178436
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
a) Show that for any real numbers $a$ and $b$ the following relation holds:

$$
\left(a^{2}+1\right)\left(b^{2}+1\right)+50 \geq 2(2 a+1)(3 b+1)
$$

b) Determine the natural numbers $n$ and $p$ that satisfy the relation:

$$
\left(n^{2}+1\right)\left(p^{2}+1\right)+45=2(2 n+1)(3 p+1)
$$
