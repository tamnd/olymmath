---
tag: PR159AA7JR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262793
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For complex number constant $c$, and real number constants $p$ and $q$, there exist three distinct complex values of $x$ that satisfy $x^3 + cx + p(1 + qi) = 0$. Suppose $c$, $p$, and $q$ were chosen so that all three complex roots $x$ satisfy $\tfrac{5}{6} \leq \tfrac{\mathrm{Im}(x)}{\mathrm{Re}(x)} \leq \tfrac{6}{5}$, where $\mathrm{Im}(x)$ and $\mathrm{Re}(x)$ are the imaginary and real part of $x$, respectively. The largest possible value of $|q|$ can be expressed as a common fraction $\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Compute $m + n$.
