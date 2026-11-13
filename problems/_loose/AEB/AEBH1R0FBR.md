---
tag: AEBH1R0FBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h473481
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8683
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2012
    source: hf-ai-mo-aops
    label: 2012 Romania National Olympiad
---
Let $f,g\colon [0,1]\to [0,1]$ be two functions such that $g$ is monotonic, surjective and $|f(x)-f(y)|\le |g(x)-g(y)|$ , for any $x,y\in [0,1]$ .

**a)** Prove that $f$ is continuous and that there exists some $x_0\in [0,1]$ with $f(x_0)=g(x_0)$ .**b)** Prove that the set $\{x\in [0,1] | f(x)=g(x)\}$ is a closed interval.
