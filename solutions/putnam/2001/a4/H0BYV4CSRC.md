---
tag: H0BYV4CSRC
kind: solution
problem: 3DYBQMHCXR
origin: human
author:
  display: Misha Lavrov
source: mathse
url: https://math.stackexchange.com/a/4056819
zone: Z1
lang: en
complete: false
---
First, look at just one pair of lines with one condition: $G$ is a point on line $AB$, and $BF$ bisects $CG$ at point $S$.

If $\frac{AG}{AB} = r$ and $\frac{CF}{CA} = s$, we can find a relationship between $r$ and $s$. For example, using areas: since $S$ bisects $CG$, $[BFG] = [BFC]$. We have $[BFC] = s \cdot [ABC]$, and $$[BFG] = (1-r) \cdot [BFA] = (1-r) \cdot (1-s) \cdot [ABC],$$ so $s = (1-r)(1-s)$, which is easiest to write as $r = 1- \frac{s}{1-s} = \frac{1-2s}{1-s}$.

The actual algebraic relationship is not super important to this step, but I derive it to give a rigorous proof of an intuitive fact: as $s$ increases, $r$ decreases, and vice versa.

The same relationship must hold between any two of the three ratios, by an identical proof.

----------

Now suppose that (for a fixed equilateral $\triangle ABC$) there are multiple possible ways to draw $AE, BF, CG$ that satisfy the condition. Choose one with the maximum possible value of $\frac{AG}{AB}$. Then it must have the minimum possible value of $\frac{CF}{CA}$. Then it must have the *maximum* possible value of $\frac{BE}{BC}$, from which we deduce that actually it has the *minimum* possible value of $\frac{AG}{AB}$. In other words, only one value of $\frac{AG}{AB}$, and similarly only one value of $\frac{CF}{CA}$ and $\frac{BE}{BC}$, is possible.

Having shown uniqueness, we are finally ready to look at what happens when we apply the $120^\circ$ rotation that takes $A$ to $B$, $B$ to $C$, and $C$ to $A$. In general, this takes the points $E,F,G$ to points $E', F', G'$ such that segments $A'E'$, $B'F'$, and $C'G'$ satisfy the condition in the problem; in other words, $BE'$, $CF'$, and $AG'$ have the property we want. But because the solution is unique, we must have $E'=F$, $F'=G$, and $G'=E$. From this, $AG=CF=BE$ in the equilateral case follows.
