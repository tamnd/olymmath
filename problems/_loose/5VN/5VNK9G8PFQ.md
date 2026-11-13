---
tag: 5VNK9G8PFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3099018
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26178
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2022
    source: hf-ai-mo-aops
    label: 2022 JBMO Shortlist
---
Let $x, y,$ and $z$ be positive real numbers such that $xy + yz + zx = 3$ . Prove that $$ \frac{x + 3}{y + z} + \frac{y + 3}{z + x} + \frac{z + 3}{x + y} + 3 \ge 27 \cdot \frac{(\sqrt{x} + \sqrt{y} + \sqrt{z})^2}{(x + y + z)^3}. $$ Proposed by *Petar Filipovski, Macedonia*
