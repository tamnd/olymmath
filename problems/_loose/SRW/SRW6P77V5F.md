---
tag: SRW6P77V5F
kind: problem
type: answer
answer: "127"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the minimum real $C$ where for any reals $0 = a_0 < a_{1} < \dots < a_{1000}$ then $$\min_{0 \le k \le 1000} (a_{k}^2 + (1000-k)^2) \le C(a_1+ \dots + a_{1000})$$ holds. Find $\lfloor 100C \rfloor.$
