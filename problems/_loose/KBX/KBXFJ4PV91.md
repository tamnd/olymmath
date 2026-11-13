---
tag: KBXFJ4PV91
kind: problem
type: answer
answer: "2016"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LII Olimpiada Matemática Española
---
Find the smallest integer solution of the equation

$$
\left\lfloor\frac{x}{8}\right\rfloor-\left\lfloor\frac{x}{40}\right\rfloor+\left\lfloor\frac{x}{240}\right\rfloor=210
$$

(If $x$ is a real number, $\lfloor x\rfloor$ is the integer part of $x$, that is, the greatest integer less than or equal to $x$.)
