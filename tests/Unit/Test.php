<?php

namespace Unit;

use PHPUnit\Framework\TestCase;

class Test extends TestCase
{
    public function test1(): void
    {
        usleep(100000);
        $this->assertEquals(2, 1 + 1);
    }

    public function test10(): void
    {
        $this->test1();
    }

    public function test2(): void
    {
        $this->test1();
    }

    public function test3(): void
    {
        $this->test1();
    }

    public function test4(): void
    {
        $this->test1();
    }

    public function test5(): void
    {
        $this->test1();
    }

    public function test6(): void
    {
        $this->test1();
    }

    public function test7(): void
    {
        $this->test1();
    }

    public function test8(): void
    {
        $this->test1();
    }

    public function test9(): void
    {
        $this->test1();
    }
}
