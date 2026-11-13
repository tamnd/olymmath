---
tag: QYBEBS5MW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254411
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all integers $x,y,z$, let $$S(x,y,z) = (xy - xz, yz-yx, zx - zy).$$ Prove that for all integers $a$, $b$ and $c$ with $abc>1$, and for every integer $n\geq n_0$, there exists integers $n_0$ and $k$ with $0<k\leq abc$ such that $$S^{n+k}(a,b,c) \equiv S^n(a,b,c) \pmod {abc}.$$ ($S^1 = S$ and for every integer $m\geq 1$, $S^{m+1} = S \circ S^m.$
$(u_1, u_2, u_3) \equiv (v_1, v_2, v_3) \pmod M \Longleftrightarrow u_i \equiv v_i \pmod M (i=1,2,3).$)
