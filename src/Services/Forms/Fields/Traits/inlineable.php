<?php

namespace A17\Twill\Services\Forms\Fields\Traits;

use Illuminate\Support\Collection;

trait inlineable
{
    protected bool $inline = false;

    public function inline(bool $inline = true): self
    {
        $this->inline = $inline;

        return $this;
    }
}
