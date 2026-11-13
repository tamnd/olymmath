---
tag: Y941Z7WVFS
kind: problem
type: answer
answer: '{\alpha|\alpha\in\mathbb{C},|\alpha|\geq2}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100096
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all complex numbers $\alpha$ such that for any complex numbers $\mathrm{z}_{1} 、 \mathrm{z}_{2}\left(\left|\mathrm{z}_{1}\right| 、\left|\mathrm{z}_{2}\right|<1, \mathrm{z}_{1} \neq \mathrm{z}_{2}\right)$, we have $\left(\mathrm{z}_{1}+\alpha\right)^{2}+\alpha \overline{\mathrm{z}_{1}} \neq\left(\mathrm{z}_{2}+\alpha\right)^{2}+\alpha \overline{\mathrm{z}_{2}}$.
