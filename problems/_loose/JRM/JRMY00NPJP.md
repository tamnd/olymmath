---
tag: JRMY00NPJP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a finite decimal fraction be given. Juku starts appending digits to this fraction in such a way that each new digit equals the remainder of the sum of all digits existing so far in division by $10$. (For instance, if the initial fraction is $27.35$ then the digits added to the end are $7$, $4$, $8$ etc.)
Prove that the infinite decimal fraction obtained this way represents a rational number.
