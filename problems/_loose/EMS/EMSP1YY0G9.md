---
tag: EMSP1YY0G9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077917
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78522
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $A_1A_2A_3A_4A_5$ be a regular pentagon inscribed in a circle with area $\tfrac{5+\sqrt{5}}{10}\pi$ . For each $i=1,2,\dots,5$ , points $B_i$ and $C_i$ lie on ray $\overrightarrow{A_iA_{i+1}}$ such that
$$B_iA_i \cdot B_iA_{i+1} = B_iA_{i+2} \text{and} C_iA_i \cdot C_iA_{i+1} = C_iA_{i+2}^2$$where indices are taken modulo 5. The value of $\tfrac{[B_1B_2B_3B_4B_5]}{[C_1C_2C_3C_4C_5]}$ (where $[\mathcal P]$ denotes the area of polygon $\mathcal P$ ) can be expressed as $\tfrac{a+b\sqrt{5}}{c}$ , where $a$ , $b$ , and $c$ are integers, and $c > 0$ is as small as possible. Find $100a+10b+c$ .

*Proposed by Robin Park*
