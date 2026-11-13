---
tag: YVP1EW62JF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that
$$\operatorname{Re}\left(\operatorname{Li}_2\left(\frac{1-i\sqrt3}2\right)+\operatorname{Li}_2\left(\frac{\sqrt3-i}{2\sqrt3}\right)\right)=\frac{7\pi^2}{72}-\frac{\ln^23}8$$
where as usual
$$\operatorname{Li}_2(z)=-\int^z_0\frac{\ln(1-t)}tdt,z\in\mathbb C\setminus[1,\infty)$$

*Proposed by Paolo Perfetti*
