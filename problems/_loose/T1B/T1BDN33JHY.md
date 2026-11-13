---
tag: T1BDN33JHY
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are $n$ points on the plane, no three of which are collinear. Draw $n-1$ non-intersecting segments (except possibly at endpoints) between pairs of points, such that it is possible to travel between any two points by travelling along the segments. Such a configuration of points and segments is called a *network*. Given a network, we may assign labels from $1$ to $n-1$ to each segment such that each segment gets a different label. Define a *spin* as the following operation:

$\bullet$ Choose a point $v$ and rotate the labels of its adjacent segments clockwise. Formally, let $e_1,e_2,\cdots,e_k$ be the segments which contain $v$ as an endpoint, sorted in clockwise order (it does not matter which segment we choose as $e_1$). Then, the label of $e_{i+1}$ is replaced with the label of $e_{i}$ simultaneously for all $1 \le i \le k$. (where $e_{k+1}=e_{1}$)

A network is *nontrivial* if there exists at least $2$ points with at least $2$ adjacent segments each. A network is *versatile* if any labeling of its segments can be obtained from any initial labeling using a finite amount of spins. Find all integers $n \ge 5$ such that any nontrivial network with $n$ points is versatile.

*Proposed by Yeoh Zi Song*
