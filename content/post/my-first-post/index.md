---
title: "Baire纲的一系列问题"
date: 2025-01-01T00:00:00+08:00
draft: false
math: true
toc: true
sidebar: left
banner: "images/post-header-1.jpg"
cover: "images/post-card-1.jpg"
categories:
  - 泛函分析
tags:
  - Baire
  - Banach-Steinhaus
  - 数学
---

# 0. 概要

众所周知，线性泛函分析的重要定理可以粗略分为两个系列，其一是由选择公理得到的 Hahn-Banach 定理及其一系列推论，另一是由 Baire 纲定理得到的一系列定理：开映射、逆算子、闭图像、共鸣一串定理。

后续把共鸣定理、Steinhaus 定理等类似的东西口头上叫做共鸣一串定理。写英语证明的时候我会不予区分地写 Banach-Steinhaus 定理，由于有用 AI 改，有的时候可能会出现别的词，请自行区分。

由于 Baire 纲系列定理的性质蛮好，其应用比较广泛且初次见到可能比较困难，故整理如下一系列的问题帮助初学者认识它们。

# 1. 有限维问题

如下是一些特定条件下会使得空间只能是有限维的问题。

## Question 1.1

Let \(P\) be a closed subspace of \(C[0,1]\) with respect to the \(\infty\)-norm, where

\[
\|f\|_\infty := \max_{x\in[0,1]} |f(x)|.
\]

Suppose that \(P\) consists of polynomials on \([0,1]\). Show that

\[
\dim P < \infty.
\]

**Proof.**

Note that

\[
P=\bigcup_{k=1}^{\infty}
\left\{
f\in P : \deg f \le k
\right\}
=:
\bigcup_{k=1}^{\infty} F_k.
\]

Each \(F_k\) is a closed subspace of \(P\). By the Baire category theorem, since \(P\) is a complete metric space as a closed subspace of \(C[0,1]\), there must exist an integer \(N\) such that \(F_N\) has nonempty interior in \(P\).

Because \(F_N\) is a subspace, having nonempty interior forces \(F_N=P\). Thus

\[
\dim P \le N+1 < \infty.
\]

## Question 1.2

Let \(M\) be a closed subspace of \(C[0,1]\) with respect to the \(\infty\)-norm, where

\[
\|f\|_\infty := \max_{x\in[0,1]} |f(x)|.
\]

Suppose \(M\subset C^1[0,1]\). Show that

\[
\dim M < \infty.
\]

**Proof.**

Consider the derivative operator

\[
D:M\ni f\mapsto f'\in C[0,1].
\]

We can show that \(D\) is a closed linear operator; hence, by the closed graph theorem, it is bounded. By the Arzelà-Ascoli theorem, the unit ball

\[
B := \{f\in M : \|f\|_\infty \le 1\}
\]

is a compact set. Consequently, by Riesz’s lemma, the dimension of \(M\) is finite.

这里提一个问题：Q1.2 是不是直接可得 Q1.1 呢？因为多项式是连续可微的。

这里再放一个神秘问题，它利用了 \(L^2\) 的特别性质，即它是一个 Hilbert 空间。

## Question 1.3

Let \(H\) be a closed subspace of \(L^2[0,1]\), and \(H\subset C[0,1]\). Show that

\[
\dim H < \infty.
\]

**Proof.**

\(H\) is a Hilbert space since it is a closed subspace of the Hilbert space \(L^2[0,1]\). If \(H\) is infinite-dimensional, there exists a standard orthonormal basis \(\{e_n\}_{n=1}^{\infty}\) for \(H\).

Notice that the identity operator

\[
I:H\ni f\mapsto f\in C[0,1]
\]

is a closed linear operator, so it is a bounded operator by the closed graph theorem. Hence there exists a constant \(A>0\) such that

\[
\|f\|_\infty \le A\|f\|_2
\]

for all \(f\in H\).

For each \(x\in[0,1]\), define the evaluation functional

\[
E_x(f) := f(x).
\]

It is easy to see that \(E_x\) is a bounded linear functional on \(H\), because

\[
|E_x(f)| = |f(x)| \le \|f\|_\infty \le A\|f\|_2.
\]

Thus the norm of \(E_x\) is at most \(A\). There exists a unique \(K_x\in H\) such that

\[
E_x(f) = \langle f,K_x\rangle = \int_{[0,1]} f(t)K_x(t)\,dt
\]

by the Riesz representation theorem. We can see that

\[
A^2\ge \|K_x\|_2^2 = \sum_{k=1}^{\infty} |\langle K_x,e_k\rangle|^2 = \sum_{k=1}^{\infty} |E_x(e_k)|^2 = \sum_{k=1}^{\infty} |e_k(x)|^2.
\]

Integrating this inequality over \([0,1]\) and using the monotone convergence theorem to exchange sum and integral yields

\[ 
A^2 \ge \int_{[0,1]} \sum_{k=1}^{\infty} |e_k(x)|^2\,dx = \sum_{k=1}^{\infty} \int_{[0,1]} |e_k(x)|^2\,dx = \infty.
\]

This is impossible. Hence \(H\) cannot be infinite-dimensional; therefore

\[
\dim H < \infty.
\]

# 2. 共鸣一串定理的应用

这几个问题可能算是比较经典的吧，我在一本老书上翻到的，算是比较直接的推论。

## Question 2.1

Let \(X\) be a Banach space and \(\{x_n\}\subset X\). Suppose \(\{f(x_n)\}\) is bounded for every \(f\in X^*\). Show that \(\{\|x_n\|\}\) is bounded.

**Proof.**

Naturally, we can consider each \(x_n\) as a bounded linear functional on \(X^*\), defined by

\[
x_n(f) = f(x_n).
\]

Its operator norm equals its norm in \(X\). Then, by the Banach-Steinhaus theorem, \(\{\|x_n\|\}\) is indeed bounded since the orbit \(\{x_n(f)\}\) is bounded for every \(f\in X^*\).

这个道理十分经典，在证明存在周期连续函数其一点处 Fourier 级数发散就是这个道理。另外还可以证明 Lagrange 插值以及 Fourier 级数逼近连续函数的时候不可能对所有连续函数都是一致逼近。

## Question 2.2

Let \(X\) be a Banach space and \(\{f_n\}\subset X^*\). Then the following are equivalent:

(a) For each \(x\in X\),

\[
\sum_{n=1}^{\infty} |f_n(x)|
\]

converges.

(b) For each \(F\in X^{**}\),

\[
\sum_{n=1}^{\infty} |F(f_n)|
\]

converges.

**Proof.**

The implication \((b)\Rightarrow(a)\) is trivial. We prove \((a)\Rightarrow(b)\).

For each \(x\in X\),

\[
\sum_{n=1}^{\infty} |f_n(x)| < \infty.
\]

Hence, for any \(n\in\mathbb{N}\) and any choice of signs \(\epsilon_k\in\{-1,1\}\),

\[
\left|
\sum_{k=1}^{n} \epsilon_k f_k(x)
\right|
\le
\sum_{k=1}^{\infty} |f_k(x)|
<
\infty.
\]

Thus the family of functionals

\[
\left\{
\sum_{k=1}^{n} \epsilon_k f_k
:
n\in\mathbb{N},\ \epsilon_k=\pm 1
\right\}
\]

is pointwise bounded on \(X\). By the Banach-Steinhaus theorem, that is, the uniform boundedness principle, it is uniformly bounded: there exists \(M>0\) such that

\[
\left\|
\sum_{k=1}^{n} \epsilon_k f_k
\right\|
\le
M
\qquad
\text{for all } n\in\mathbb{N},\ \epsilon_k\in\{-1,1\}.
\]

Now take an arbitrary \(F\in X^{**}\). Define \(s_k=1\) if \(F(f_k)\ge 0\), and \(s_k=-1\) otherwise. Then

\[ 
\sum_{k=1}^{n} |F(f_k)| = F\left( \sum_{k=1}^{n} s_k f_k \right) \le\|F\|\left\|\sum_{k=1}^{n} s_k f_k \right\| \le \|F\|M.
\]

The partial sums of the positive series \(\sum |F(f_n)|\) are bounded, so the series converges. This completes the proof.

## Question 2.3

Let \(X\) be a Banach space and \(\{x_n\}\subset X\). Suppose

\[
\sum_{n=1}^{\infty} |f(x_n)| < \infty
\]

for every \(f\in X^*\). Show that there exists a constant \(M>0\) such that

\[
\sum_{n=1}^{\infty} |f(x_n)| \le M\|f\|.
\]

这个问题的证明和 Q2.2 中用到的没什么大区别，不再赘述。

## Question 2.4

Let \(X\) be a Banach space, and let \(A:X\to X\) and \(B:X^*\to X^*\) be linear operators. Suppose that

\[
(Bf)(x) = f(Ax),
\qquad
\text{for all } x\in X,\ f\in X^*.
\]

Show that both \(A\) and \(B\) are bounded.

**Proof.**

For fixed \(f\in X^*\), there exists a corresponding constant

\[
M_f = \|Bf\| \ge 0
\]

such that

\[
|f(Ax)| \le M_f\|x\|.
\]

We can view \(Ax\) as a functional on \(X^*\), defined by

\[
(Ax)(f) = f(Ax).
\]

Let

\[
\mathcal{B} = \{x\in X : \|x\|\le 1\}.
\]

Then, by the Banach-Steinhaus theorem, the family of functionals

\[
\{Ax : x\in\mathcal{B}\}
\]

is uniformly bounded, i.e. there exists a constant \(M\) such that

\[
\|Ax\|\le M
\]

for all \(x\in\mathcal{B}\). So the operator norm of \(A\) cannot be more than \(M\). Thus \(A\) is bounded.

Now we easily get the estimate

\[
\sup_{\|f\|\le 1} \sup_{x\in\mathcal{B}} |(Bf)(x)| = \sup_{\|f\|\le 1} \sup_{x\in\mathcal{B}}|f(Ax)| \le M.
\]

Hence \(B\) is bounded too. The proof is complete.

相应的有下面这样一个结果，它被称为 Hellinger-Toeplitz 定理。我认为完全可以用 Q2.4 来写，不过我们还是换一种写法。

## Question 2.5

Let \(X\) be a Hilbert space and \(A:X\to X\) a linear operator satisfying

\[
\langle Ax,y\rangle = \langle x,Ay\rangle,
\qquad
\text{for all } x,y\in X.
\]

Show that \(A\) is bounded.

**Proof.**

By the closed graph theorem, we just need to show that \(A\) is closed.

Let \(\{x_n\}\) be a sequence converging to \(x\) in \(X\), and suppose \(Ax_n\to y\). Then we have

\[
\begin{aligned}
\langle y,z\rangle
&=
\lim_{n\to\infty} \langle Ax_n,z\rangle \\
&=
\lim_{n\to\infty} \langle x_n,Az\rangle \\
&=
\langle x,Az\rangle \\
&=
\langle Ax,z\rangle,
\end{aligned}
\qquad
\text{for all } z\in X.
\]

Let \(z=Ax-y\). Then we get

\[
\langle Ax-y,Ax-y\rangle = 0.
\]

The proof is complete.

上面这个证明也可以搬到 Q2.4 里去，需要注意的是没有内积，先有如下这样的形式：

\[
\begin{aligned}
\langle y,g\rangle
&=
\lim_{n\to\infty} \langle Ax_n,g\rangle \\
&=
\lim_{n\to\infty} \langle x_n,Bg\rangle \\
&=
\langle x,Bg\rangle \\
&=
\langle Ax,g\rangle.
\end{aligned}
\]

再用 Hahn-Banach 定理来说：只要 \(y\neq Ax\)，就必有 \(g\) 使得

\[
\langle Ax-y,g\rangle \neq 0,
\]

从而这不可能，进而就可以说清楚了。

# 3. Baire 纲

这里是一些比较直接地使用 Baire 纲定理的问题。

## Question 3.1

Let \(f\in C^\infty(\mathbb{R})\) such that for every \(x\in\mathbb{R}\), there exists an integer \(n(x)\ge 0\) with

\[
f^{(n(x))}(x)=0.
\]

Show that \(f\) is a polynomial.

**Proof.**

Suppose \(f\) is not a polynomial. Define

\[
\begin{aligned}
F_n
&=
\{x\in\mathbb{R} : f^{(n)}(x)=0\}, \\
X
&=
\left\{
x\in\mathbb{R}
:
\forall\delta>0,\ \forall m\ge 0,\
f^{(m)}\not\equiv 0
\text{ on } (x-\delta,x+\delta)
\right\}.
\end{aligned}
\]

Since \(f\) is not a polynomial, \(X\neq\varnothing\).

First, \(X\) has no isolated points. If some \(x\in X\) were isolated, there would exist \(\delta>0\) such that

\[
X\cap(x-\delta,x+\delta)=\{x\}.
\]

Every other point in that interval has a neighbourhood where \(f\) is a polynomial; patching these pieces together forces \(f\) to be a polynomial on the whole interval, contradicting \(x\in X\). Hence \(X'=X\); in particular \(X\) is closed.

Second, we apply Baire’s theorem. Since \(X\) is closed, it is a complete metric space. By hypothesis each \(x\in X\) belongs to some \(F_{n(x)}\), so

\[
X =
\bigcup_{n=0}^{\infty} (X\cap F_n).
\]

Baire’s theorem gives a smallest integer \(n\ge 0\) such that \(X\cap F_n\) has nonempty interior in \(X\), i.e. we can choose an open interval \((a,b)\) with

\[
\varnothing \neq (a,b)\cap X \subseteq F_n.
\]

Because \(X\) has no isolated points, every point of \((a,b)\cap X\) is a limit point of \(X\). From \(f^{(n)}=0\) on \((a,b)\cap X\) and continuity of derivatives, we obtain inductively

\[
f^{(k)}(x)=0
\qquad
\forall x\in(a,b)\cap X,\ \forall k\ge n.
\]

Third, consider the behaviour on the complementary intervals. The set \((a,b)\setminus X\) is open, so it is a countable union of disjoint open intervals:

\[
(a,b)\setminus X =
\bigcup_{\lambda} I_\lambda,
\qquad
I_\lambda=(a_\lambda,b_\lambda).
\]

On each \(I_\lambda\), the function \(f\) is a polynomial; let \(n_\lambda\) be the smallest integer with

\[
f^{(n_\lambda)}\equiv 0
\]

on \(I_\lambda\). By continuity,

\[
f^{(k)}\equiv 0
\]

on \(\overline{I_\lambda}\) for all \(k\ge n_\lambda\).

We show \(n_\lambda\le n\). The case \(n_\lambda=0\) is trivial. If \(n_\lambda\ge 1\), minimality implies \(f^{(n_\lambda-1)}\) is a nonzero constant on \(I_\lambda\), hence

\[
f^{(n_\lambda-1)}(a_\lambda)\neq 0
\qquad
\text{and}
\qquad
f^{(n_\lambda-1)}(b_\lambda)\neq 0.
\]

Therefore \(n_\lambda-1<n\), i.e.

\[
n_\lambda\le n.
\]

Finally, on each \(I_\lambda\) we now have

\[
f^{(n)}\equiv 0.
\]

Together with \(f^{(n)}=0\) on \((a,b)\cap X\), this yields

\[
f^{(n)}\equiv 0
\]

on the whole interval \((a,b)\). Hence \(f\) is a polynomial on \((a,b)\), contradicting the fact that \((a,b)\) contains points of \(X\).

Thus \(f\) must be a polynomial on \(\mathbb{R}\).

以上这个令人瞩目的结果是 1954 年的，而后在 1990 年推广到了多元函数的情形。由于 1954 年那篇文章是法语（好像）的标题，我懒得查具体怎么打了就不打了。1990 那篇可以查这个标题：“A pointwise condition for an infinitely differentiable function of several variables to be a polynomial.”
