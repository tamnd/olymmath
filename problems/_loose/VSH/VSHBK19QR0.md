---
tag: VSHBK19QR0
kind: problem
type: answer
answer: "349"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest prime number $p<1000$ for which there exists a complex number $z$ satisfying

the real and imaginary part of $z$ are both integers;
$|z|=\sqrt{p},$ and
there exists a triangle whose three side lengths are $p,$ the real part of $z^{3},$ and the imaginary part of $z^{3}.$
