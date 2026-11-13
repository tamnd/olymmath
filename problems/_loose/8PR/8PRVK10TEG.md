---
tag: 8PRVK10TEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ k > 1$ be an integer, and consider the infinite array given by the integer lattice in the first quadrant of the plane, filled with real numbers. The array is said to be constant if all its elements are equal in value. The array is said to be $ k$-balanced if it is non-constant, and the sums of the elements of any $ k\times k$ sub-square have a constant value $ v_k$. An array which is both $ p$-balanced and $ q$-balanced will be said to be $ (p, q)$-balanced, or just doubly-balanced, if there is no confusion as to which $ p$ and $ q$ are meant. If $p, q$ are relatively prime, the array is said to be co-prime. We will call $ (M\times N)$-seed a $ M \times N$ array, anchored with its lower left corner in the origin of the plane, which extended through periodicity in both dimensions in the plane results into a $ (p, q)$-balanced array; more precisely, if we denote the numbers in the array by $ a_{ij}$ , where $ i, j$ are the coordinates of the lower left corner of the unit square they lie in, we have, for all non-negative integers $ i, j$
$$ a_{i + M,j} = a_{i,j} = a_{i,j + N}$$
(a) Prove that $ q^2v_p = p^2v_q$ for a $ (p, q)$-balanced array.
(b) Prove that more than two different values are used in a co-prime $ (p,q)$-balanced array. Show that this is no longer true if $ (p, q) > 1$.
(c) Prove that any co-prime $ (p, q)$-balanced array originates from a seed.
(d) Show there exist $ (p, q)$-balanced arrays (using only three different values) for arbitrary values $ p, q$.
(e) Show that neither a $ k$-balanced array, nor a $ (p, q)$-balanced array if $ (p, q) > 1$, need originate from a seed.
(f) Determine the minimal possible value $ T$ for a square $ (T\times T)$-seed resulting in a co-prime $ (p, q)$-balanced array, when $p,q$ are both prime.
(g) Show that for any relatively prime $ p, q$ there must exist a co-prime $ (p, q)$-balanced array originating from a square $ (T\times T)$-seed, with no lesser $ (M\times N)$-seed available ($ M\leq T, N\leq T$ and $MN< T^2$).

*Dan Schwarz*
