---
tag: XG40BPA1H9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33506
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be two random variables, $\mathrm{D} \xi>0, \mathrm{D} \eta>0$ and $\rho=$ $\rho(\xi, \eta)$ be their correlation coefficient. Show that $|\rho| \leqslant 1$. Moreover, if $|\rho|=1$, then there exist constants $a$ and $b$ such that $\eta=a \xi+b$. Furthermore, if $\rho=1$, then

$$
\frac{\eta-\mathrm{E} \eta}{\sqrt{D \eta}}=\frac{\xi-\mathrm{E} \xi}{\sqrt{D \xi}}
$$

(and, therefore, in the case $\rho=1$ the constant $a$ is positive), and if $\rho=-1$, then

$$
\frac{\eta-\mathrm{E} \eta}{\sqrt{\mathrm{D} \eta}}=-\frac{\xi-\mathrm{E} \xi}{\sqrt{D \xi}}
$$

(and, therefore, in this case $a<0$).
