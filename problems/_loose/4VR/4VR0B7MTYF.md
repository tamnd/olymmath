---
tag: 4VR0B7MTYF
kind: problem
type: answer
answer: "13.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a three-channel queuing system with rejections, requests arrive according to a Poisson process. The time between the arrivals of two consecutive requests is exponentially distributed with $f(\tau)=5 e^{-5 \tau}$. The service time for each request is 0.5 minutes.

Find the expected value $a$ of the number of requests served in time $T=4$ minutes using the Monte Carlo method.
