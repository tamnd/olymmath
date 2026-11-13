---
tag: KCS86VNE82
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
$2N$ points are marked on a circle ($N$ is a positive integer) so that no point in the interior of the circle belongs to three chords with the endpoints at marked points. A collection of $N$ chords with the endpoints at marked points is called a *matching* if every marked point is the endpoint of exactly one of these chords. A matching is called *even* if the number of intersection points of its chords is even, and *odd* otherwise. Find the difference between the quantities of even and odd matchings.
