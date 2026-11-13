---
tag: JBD3TBT787
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h220462
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25085
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1992
    source: hf-ai-mo-aops
    label: 1992 IMO Longlists
---
Let $ \lfloor x \rfloor$ denote the greatest integer less than or equal to $ x.$ Pick any $ x_1$ in $ [0, 1)$ and define the sequence $ x_1, x_2, x_3, \ldots$ by $ x_{n+1} = 0$ if $ x_n = 0$ and $ x_{n+1} = \frac{1}{x_n} - \left \lfloor \frac{1}{x_n} \right \rfloor$ otherwise. Prove that

$$ x_1 + x_2 + \ldots + x_n < \frac{F_1}{F_2} + \frac{F_2}{F_3} + \ldots + \frac{F_n}{F_{n+1}},$$

where $ F_1 = F_2 = 1$ and $ F_{n+2} = F_{n+1} + F_n$ for $ n \geq 1.$
