import struct, zlib

def create_png(size):
    width = height = size
    
    def make_chunk(chunk_type, data):
        chunk = chunk_type + data
        return struct.pack('>I', len(data)) + chunk + struct.pack('>I', zlib.crc32(chunk) & 0xffffffff)
    
    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = make_chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0))
    
    raw = b''
    for y in range(height):
        raw += b'\x00'
        for x in range(width):
            raw += bytes([59, 130, 246])  # Blue color
    
    idat = make_chunk(b'IDAT', zlib.compress(raw))
    iend = make_chunk(b'IEND', b'')
    
    return sig + ihdr + idat + iend

for size in [16, 48, 128]:
    with open(f'icon{size}.png', 'wb') as f:
        f.write(create_png(size))
    print(f'Created icon{size}.png')
