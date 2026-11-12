---
tag: S1WF1RBYZQ
kind: problem
type: answer
answer: 2,\frac{1}{2},3,\frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pair "point-line" (from the existing ones) is called a contact if this line passes through this point. Then each point participates in 199 contacts, and thus there are a total of 200*199 contacts. Each line participates in two contacts, so the number of lines is $\frac{199 * 200}{2}=19900$. It is crucial that no two lines participate in the same contact, just as no two points do.
