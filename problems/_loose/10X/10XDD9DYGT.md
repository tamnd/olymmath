---
tag: 10XDD9DYGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the function $y=\frac{x^{2}-1}{x}$ is increasing in any interval that does not contain the point $x=0$.

We have established that the intervals of increase or decrease of a function coincide with the intervals in which the derivative of this function maintains its sign. Therefore, a transition from increasing to decreasing or vice versa is possible only at points where the derivative changes sign. Such points can only be those where $f^{\prime}(x)=0$, as well as points of discontinuity.

Therefore, we will obtain the intervals of monotonicity if we divide the domain of the function into parts, the boundaries of which are the points where $f^{\prime}(x)=0$, and the points of discontinuity.

Let us now formulate the rule for finding the intervals of monotonicity of the function $f(x)$.

$1^{0}$. The derivative $f^{\prime}(x)$ of the given function is calculated.

$2^{0}$. The points where $f^{\prime}(x)$ is zero or does not exist are found. These points are called critical points for the function $f(x)$.

$3^{0}$. The domain of the function $f(x)$ is divided into intervals by the found points, on each of which the derivative $f^{\prime}(x)$ maintains its sign. These intervals are the intervals of monotonicity.

$4^{0}$. The sign of $f^{\prime}(x)$ is investigated on each of the found intervals. If on the considered interval $f^{\prime}(x)>0$, then on this interval $f(x)$ is increasing; if $f^{\prime}(x)<0$, then on such an interval $f(x)$ is decreasing.

Remark. Depending on the conditions of the problem, the rule for finding the intervals of monotonicity can be simplified.

543-563. Find the intervals of monotonicity of the following functions: 543. $y=x^{2}-4 x+1$.
