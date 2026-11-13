---
tag: EXHC10SG59
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Katelyn is building an integer (in base $10$). She begins with $9$. Each step, she appends a randomly chosen digit from $0$ to $9$ inclusive to the right end of her current integer. She stops immediately when the current integer is $0$ or $1$ (mod $11$). The probability that the final integer ends up being $0$ (mod $11$) is $\tfrac ab$ for coprime positive integers $a$, $b$. Find $a + b$.

*Proposed by Evan Chang*
