---
tag: 8EA8AFFYYA
kind: problem
type: answer
answer: \sqrt{2}-\sqrt{\frac{\pi}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the complex numbers $z_{1}=\frac{\cos x^{2}}{\sin y^{2}}+\mathrm{i} \cdot \frac{\cos y^{2}}{\sin x^{2}}, z_{2}=x+y i(x, y \in \mathbf{R})$. If when $x, y$ take all real numbers in the interval $\left[-\sqrt{\frac{\pi}{2}}, \sqrt{\frac{\pi}{2}}\right]$, $\left|z_{1}\right|$ is always equal to $\sqrt{2}$. Try to find the maximum and minimum values of $\left|z_{1}-z_{2}\right|$.
