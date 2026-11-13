---
tag: VRK049NHHT
kind: problem
type: answer
answer: 20\midn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178986
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Show that if $x, y$ and $n$ are natural numbers such that

$$
n=\frac{x^{2}-1}{2}=\frac{y^{2}-1}{3}
$$

then
a) $n=y^{2}-x^{2}$;
b) $n$ is a multiple of 20.
