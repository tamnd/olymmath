---
tag: NZNT24EK3M
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At present, the exchange rates of the US dollar and the euro are as follows: $D=6$ yuan and $E=7$ yuan. The People's Bank of China determines the yuan exchange rate independently of market conditions and adheres to a policy of approximate equality of currencies. One bank employee proposed the following scheme for changing the exchange rate to the management. Over one year, the exchange rates $D$ and $E$ are allowed to change according to the following four rules. Either change $D$ and $E$ to the pair $(D+E, 2D \pm 1)$, or to the pair $(D+E, 2E \pm 1)$. Moreover, it is forbidden for the exchange rates of the dollar and euro to be equal at any time.

For example: From the pair $(6,7)$, after one year, the following pairs can be made: $(13,11)$, $(11,13)$, $(13,15)$, or $(15,13)$. What is the smallest value that the difference between the larger and smaller of the resulting exchange rates can take after 101 years?
