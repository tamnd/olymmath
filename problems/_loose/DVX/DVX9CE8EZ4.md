---
tag: DVX9CE8EZ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that $ \rho (f)$ changes continously over $ f$. It means for every bijection $ f: S^1\rightarrow S^1$ and $ \epsilon > 0$ there is $ \delta > 0$ such that if $ g: S^1\rightarrow S^1$ is a bijection such that $ \parallel{}f - g\parallel{} < \delta$ then $ |\rho(f) - \rho(g)| < \epsilon$.

Note that $ \rho(f)$ is the rotatation number of $ f$ and $ \parallel{}f - g\parallel{} = \sup\{|f(x) - g(x)| | x\in S^1\}$.
