---
tag: DQV7X50VGN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226708
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24873
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
In the set $ S_n = \{1, 2,\ldots ,n\}$ a new multiplication $ a*b$ is defined with the following properties:

**(i)** $ c = a * b$ is in $ S_n$ for any $ a \in S_n, b \in S_n.$
**(ii)** If the ordinary product $ a \cdot b$ is less than or equal to $ n,$ then $ a*b = a \cdot b.$
**(iii)** The ordinary rules of multiplication hold for $ *,$ i.e.:

**(1)** $ a * b = b * a$ (commutativity)
**(2)** $ (a * b) * c = a * (b * c)$ (associativity)
**(3)** If $ a * b = a * c$ then $ b = c$ (cancellation law).

Find a suitable multiplication table for the new product for $ n = 11$ and $ n = 12.$
