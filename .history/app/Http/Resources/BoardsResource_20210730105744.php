<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BoardsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'board_name' => $this->board_name,
            'updated_at' => $this->updated_at->format('Y/m/d'),
            'posts' => BoardsResource::collection($this->posts)
        ];
    }
}
