---
tag: 3RHR93E9ST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ $ Given $\mathrm{a}^{2}<4 \mathrm{~b}, \mathrm{c}^{2}<4 \mathrm{~d}$. We will show that then $\left(\frac{\mathrm{a}+\mathrm{c}}{2}\right)^{2}<4\left(\frac{b+d}{2}\right)$. We have $\left(\frac{a+c}{2}\right)^{2}=\frac{1}{4}\left(a^{2}+2 a c+c^{2}\right) \leq \frac{1}{4}\left(a^{2}+\left(a^{2}+c^{2}\right)+c^{2}\right)=\frac{1}{2}\left(a^{2}+c^{2}\right) \leq \frac{1}{2}(4 b+4 d)$. (We used the inequality $\left.2 \mathrm{ac} \leq \mathrm{a}^{2}+\mathrm{c}^{2} \Leftrightarrow 0 \leq(\mathrm{a}-\mathrm{c})^{2}.\right)$
